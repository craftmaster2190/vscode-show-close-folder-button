import * as vscode from 'vscode';
'use strict';


// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  let touchbarElement = vscode.commands.registerCommand(
    'extension.touchbarElement',
    () => {
      vscode.commands.executeCommand('workbench.action.closeFolder');
    }
  );

  // Push onto context
  context.subscriptions.push(touchbarElement);
}

// this method is called when your extension is deactivated
export function deactivate() {}
