"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useExitIntentContext } from '@/components/providers/exit-intent-provider';
import { ExternalLink, Shield, ShieldOff } from 'lucide-react';

export const ExitIntentDemo: React.FC = () => {
  const { disableExitIntent, enableExitIntent, temporaryDisable, isActive } = useExitIntentContext();

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Exit Intent Protection Demo
        </CardTitle>
        <CardDescription>
          Test the exit intent protection system with these examples
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Protection Status */}
        <div className="flex items-center gap-2 p-3 rounded-lg border">
          {isActive ? (
            <>
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-700 dark:text-green-400">
                Exit protection is active
              </span>
            </>
          ) : (
            <>
              <ShieldOff className="h-4 w-4 text-red-500" />
              <span className="text-sm text-red-700 dark:text-red-400">
                Exit protection is disabled
              </span>
            </>
          )}
        </div>

        {/* Control Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Button 
            onClick={enableExitIntent}
            variant="outline"
            size="sm"
          >
            Enable Protection
          </Button>
          <Button 
            onClick={disableExitIntent}
            variant="outline"
            size="sm"
          >
            Disable Protection
          </Button>
          <Button 
            onClick={() => temporaryDisable(10000)}
            variant="outline"
            size="sm"
          >
            Disable for 10s
          </Button>
        </div>

        {/* Test Links */}
        <div className="space-y-3">
          <h4 className="font-medium">Test External Links:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <a 
              href="https://youtube.com" 
              className="flex items-center gap-2 p-2 border rounded-lg hover:bg-muted transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              YouTube (will show alert)
            </a>
            <a 
              href="https://google.com" 
              className="flex items-center gap-2 p-2 border rounded-lg hover:bg-muted transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Google (will show alert)
            </a>
            <a 
              href="https://youtube.com" 
              data-no-confirm
              className="flex items-center gap-2 p-2 border rounded-lg hover:bg-muted transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              YouTube (no alert - data-no-confirm)
            </a>
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 border rounded-lg hover:bg-muted transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              GitHub (new tab - no alert)
            </a>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-sm text-muted-foreground space-y-1">
          <p><strong>How it works:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>External links will show a confirmation modal before leaving</li>
            <li>Page refresh/close will show browser confirmation</li>
            <li>Links with <code>data-no-confirm</code> attribute skip confirmation</li>
            <li>Links opening in new tabs skip confirmation</li>
            <li>Internal links (same domain) are allowed without confirmation</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
