/**
 * Este arquivo é parte da distribuição de vscode-deploy-reloaded.
 * Copyright (c) Marcel Joachim Kloubert.
 * 
 * vscode-deploy-reloaded um software livre: você pode redistribuí-lo e ou
 * modificá-lo nos termos da da licença pública GNU como publicado pela
 * Free Software Foundation, versão 3.
 *
 * O vscode-deploy-reloaded é distribuído na expectativa de ser útil, mas 
 * SEM QUALQUER GARANTIA; até mesmo a sem a garantia COMERCIALIZAÇÃO
 * ou ADEQUAÇÃO A UM DETERMINADO FIM.
 * 
 * Veja a licença GNU Licença Pública Geral Menor  para mais detalhes
 *
 * Você deve ter recebido uma cṕida da GNU Licença Pública Geral Menor juntamente 
 * com este programa. Caso não, acesse <http://www.gnu.org/licenses/>.
 */

import { Translation } from '../i18';


// Português do Brasil
// 
// Traduzido por: Marcos Alexandre Matos Marques (https://github.com/manalista)
export const translation: Translation = {
    apis: {
        errors: {
            couldNotRegister: "Não foi possivel registrar o 'host' de API na porta{0:trim,leading_space}:{1:trim,surround,leading_space}",
            failed: "Operação falhou no 'host' de API:{0:trim,surround,leading_space}",
        },
        noneFound: "Nenhum 'host' de API encontrado!",
        selectHost: "Selecione um 'host' de API ...",
        startHost: "Iniciar 'host' de API ...",
        stopHost: "Parar 'host' de API ...",
    },
    cancel: "Cancelar",
    canceled: "Cancelado",
    changelog: "Registro de mudanças",
    close: "Fechar",
    commands: {
        executionError: "Não foi possível executar o comando{0:surround,leading_space}:{1:trim,surround,leading_space}",
        scriptNotFound: "{0:surround} 'script' não encontrado!",
    },
    compare: {
        currentFile: {
            description: "Compara o arquivo atual com outro remoto",
            failed: "Não foi possível comparar o arquivo atual:{0:trim,surround,leading_space}",
            label: "Arquivo atual ...",
        },
        errors: {
            operationFailed: "Operação de comparação falhou (veja o console de depuração 'CTRL/CMD + SHIFT + Y')!",
        },
        title: "Diff{0:trim,surround,leading_space}",
    },
    compilers: {
        errors: {
            couldNotDeleteSourceFile: "Não foi possível excluir o arquivo de origem:{0:trim,surround,leading_space}",
        },
        notSupported: "O compilador{0:trim,surround,leading_space} não é suportado!",
    },
    'continue': "Continuar",
    credentials: {
        enterPassphrase: "Informe a 'passphrase' ...",
        enterPassword: "Informe a senha ...",
        enterUsername: "Informe o nome de usuário ...",
    },
    currentFileOrFolder: {
        noneSelected: "Não há arquivo ou pasta ativo selecionado!",
    },
    DELETE: {
        askIfDeleteLocalFile: "Excluir o arquivo local também?",
        askIfDeleteLocalFiles: "Excluir os arquivos locais também?",
        canceledByOperation: "Exclusão de arquivos em{0:trim,surround,leading_space} foi cancelada pelo alvo da operação.",
        currentFile: {
            description: "Exclui o arquivo atual",
            label: "Arquivo atual ...",
        },
        currentFileOrFolder: {
            file: {
                description: "Exclui o arquivo atualmente selecionado",
                label: "Excluir arquivo selecionado",
            },
            folder: {
                description: "Exclui todos os arquivos da pasta selecionada",
                label: "Excluir pasta selecionada",
            },
            items: {
                description: "Excluir todos os arquivos dos ítens selecionados",
                label: "Excluir itens selecionados",
            }
        },
        deletingFile: "Excluíndo arquivo {0:trim,surround,leading_space} in{1:trim,surround,leading_space} ...",
        deletingFiles: "Excluído arquivos ...",
        errors: {
            invalidWorkspace: "Arquivo{0:trim,surround,leading_space} não é parte do 'workspace'{1:trim,surround,leading_space}!",
            invalidWorkspaceForPackage: "Pacote{0:trim,surround,leading_space} não é parte do 'workspace'{1:trim,surround,leading_space}!",
            operationFailed: "Operação de exclusão falhou (veja o console de depuração 'CTRL/CMD + SHIFT + Y')!",
        },
        finishedButton: {
            text: "Operação de exclusão finalizada ({0:trim,ending_space}ms)",
            tooltip: "Clique aqui para abrir a saída ...",
        },
        finishedOperation: "A exclusão dos arquivos em{0:trim,surround,leading_space} foi concluída.",
        finishedOperationWithErrors: "[ERRO] Não foi possível excluir os arquivos em{0:trim,surround,leading_space}:{1:trim,surround,leading_space}",
        fileList: {
            description: "Excluir arquivos, que estão definidos como lista no editor de texto ativo",
            label: "Lista de arquivos",
        },
        onChange: {
            activated: "Remoção ao alterar foi ativado para o 'workspace'{0:trim,surround,leading_space}.",
            button: {
                text: "Remover ao alterar",
                tooltip: "Clique aqui para ativar ou desativar 'remoção ao alterar' ..."
            },
            failed: "Remoção ao alterar para{0:trim,surround,leading_space} em{1:trim,surround,leading_space} falhou:{2:trim,surround,leading_space}",
            text: "Remover ao alterar",
            waitingBeforeActivate: "Remoção ao alterar está dasetivada por cerca de{0:trim,leading_space} segundos para o 'workspace'{1:trim,surround,leading_space}.",
        },
        package: {
            description: "Exclui todos os arquivos de um pacote",
            label: "Pacote ...",
        },
        popups: {
            allFailed: "Nenhum dos{0:trim,leading_space} arquivos pode ser excluído!",
            fileFailed: "O arquivo{0:trim,surround,leading_space} não pode ser excluído!",
            fileSucceeded: "O arquivo{0:trim,surround,leading_space} foi excluído.",
            someFailed: "{0:trim,ending_space}of {1:trim,ending_space}arquivos não puderam ser excluídos!",
            succeeded: "Total de {0:trim,ending_space}arquvios foram excluídos.",
        },
        selectTarget: "Selecione o destino de onde excluir ...",
        startOperation: "Iniciar exclusão de arquivos em{0:trim,surround,leading_space} ...",
    },
    deploy: {
        allOpenFiles: {
            description: "Implanta os arquivos de todos os editores de texto abertos",
            label: "Todos os arquivos abertos ...",
        },
        askForCancelOperation: "Você está prestes a cancelar a operação de implantação para{0:trim,surround,leading_space}. Você tem certeza?",
        canceledByOperation: "A implantação dos arquivos para{0:trim,surround,leading_space} foi cancelada pelo alvo da operação.",
        checkBeforeDeploy: {
            beginOperation: "Verificar por novos arquivos em{0:trim,surround,leading_space} ...",
            newerFilesFound: "{0:trim,ending_space}arquivos foram encontrados, os quais são mais novos. Continuar?",
            notSupported: "'checkBeforeDeploy' não é suportado no destino{0:trim,surround,leading_space}! Continuar?",
            report: {
                lastChange: "Última modificação",
                localFile: "Arquivo local",
                remoteFile: "Arquivo remoto",
                size: "Tamenho",
                title: "Arquivos mais novos em{0:trim,surround,leading_space}",
            },
        },        
        currentFile: {
            description: "Implanta o arquivo atual",
            label: "Arquivo atual ...",
        },
        currentFileOrFolder: {
            file: {
                description: "Implanta o arquivo atualmente selecionado",
                label: "Implantar arquivo selecionado",
            },
            folder: {
                description: "Implanta todos os arquivos da pasta selecionada",
                label: "Implantar pasta selecionada",
            },
            items: {
                description: "Implanta todos os arquivos do item selecionado",
                label: "Implantar itens selecionados",
            }
        },
        deployingFile: "Implantando arquivo{0:trim,surround,leading_space} to{1:trim,surround,leading_space} ...",
        deployingFiles: "Implantando arquivos ...",
        fileList: {
            description: "Implanta arquivos, os quais estão definidos como uma lista no editor de texto ativo",
            label: "Lista de arquivos",
        },
        finishedButton: {
            text: "Operação de implantação finalizada ({0:trim,ending_space}ms)",
            tooltip: "Clique aqui para abrir a saída ...",
        },
        finishedOperation: "Implantação de arquivos para{0:trim,surround,leading_space} foi finalizada.",
        finishedOperationWithErrors: "[ERRO] Não foi possível implantar arquivos para{0:trim,surround,leading_space}:{1:trim,surround,leading_space}",
        errors: {
            invalidWorkspace: "Cannot deploy file{0:trim,surround,leading_space} from workspace{1:trim,surround,leading_space}!",
            invalidWorkspaceForPackage: "Cannot deploy package{0:trim,surround,leading_space} from workspace{1:trim,surround,leading_space}!",
            operationFailed: "Deploy operation failed (veja o console de depuração 'CTRL/CMD + SHIFT + Y')!",
            operationToTargetFailed: "Deploying to target{0:trim,surround,leading_space} failed:{1:trim,surround,leading_space}",
        },
        gitCommit: {
            description: "Deploys the changes of a git commit",
            label: "git commit ...",
            patterns: {
                askForFilesToExclude: {
                    placeHolder: "(none)",
                    prompt: "Define optional patterns of files to exclude, separated by ;",
                },
                askForFilesToInclude: {
                    placeHolder: "**",
                    prompt: "Define optional patterns of files to include, separated by ;",
                }
            },
        },
        onChange: {
            activated: "Deploy on change has been activated for workspace{0:trim,surround,leading_space}.",
            button: {
                text: "Deploy on change",
                tooltip: "Click here to activate or deactivate 'deploy on change' ..."
            },
            failed: "Deploy on change from{0:trim,surround,leading_space} to{1:trim,surround,leading_space} failed:{2:trim,surround,leading_space}",
            text: "Deploy on change",
            waitingBeforeActivate: "Deploy on change is deactivated for about{0:trim,leading_space} seconds for workspace{1:trim,surround,leading_space}.",
        },
        onSave: {
            button: {
                text: "Deploy on save",
                tooltip: "Click here to activate or deactivate 'deploy on save' ..."
            },
            failed: "Deploy on save from{0:trim,surround,leading_space} to{1:trim,surround,leading_space} failed:{2:trim,surround,leading_space}",
            text: "Deploy on save",
        },
        package: {
            description: "Deploys the files of a package",
            label: "Package ...",
        },
        popups: {
            allFailed: "None of the{0:trim,leading_space} files could be deployed!",
            fileFailed: "The file{0:trim,surround,leading_space} could not be deployed!",
            fileSucceeded: "The file{0:trim,surround,leading_space} has been deployed.",
            someFailed: "{0:trim,ending_space}of {1:trim,ending_space}files could not be deployed!",
            succeeded: "Total of {0:trim,ending_space}files have been deployed.",
        },
        selectTarget: "Select the target to deploy to ...",
        startOperation: "Start deploying files to{0:trim,surround,leading_space} ...",
        uncomittedGitFiles: {
            description: "Deploys uncommited files of that git repository",
            label: "Uncommited git files",
        },
    },
    disposeNotAllowed: "Cannot invoke 'dispose()' method!",
    documents: {
        html: {
            defaultName: "HTML document #{0:trim}",
        },
    },
    done: "Done",
    editors: {
        active: {
            noOpen: "No active text editor found!",
        },
        noOpen: "No open text editor found!",
    },
    error: "ERROR:{0:trim,surround,leading_space}",
    extension: {
        initialized: "Extension has been initialized.",
        initializing: "Extension is initializing ...",
    },
    file: "File",
    fileNotFound: "File{0:trim,surround,leading_space} not found!",
    files: "Files",
    ftp: {
        couldNotConnect: "Could not start connection!",
        couldNotConnectWithJSFTP: "Could not start connection via 'jsftp'!",
    },
    http: {
        errors: {
            client: "HTTP client error{0:trim,leading_space}:{1:trim,surround,leading_space}",
            protocolNotSupported: "The protocol{0:trim,surround,leading_space} is not supported!",
            maxRedirections: "Maximum number of redirections ({0:trim}) reached!",
            noRedirectLocation: "No location defined to redirect to!",
            server: "HTTP server error{0:trim,leading_space}:{1:trim,surround,leading_space}",
            unknown: "Unknown HTTP error{0:trim,leading_space}:{1:trim,surround,leading_space}",
        },
    },
    initializationCanceled: 'The initialization of the extension has been stopped.',
    isNo: {
        directory: "{0:trim,surround,ending_space}is no directory!",
        file: "{0:trim,surround,ending_space}is no file!",
    },
    listDirectory: {
        copyPathToClipboard: {
            description: "Copies the current path to clipboard",
            errors: {
                failed: "Could not save path to clipboard (veja o console de depuração 'CTRL/CMD + SHIFT + Y'): {0}",
            },
            label: "Copiar caminho ...",
        },
        currentDirectory: "Current directory:{0:trim,surround,leading_space} ({1:trim,surround})",
        currentFileOrFolder: {
            description: "Lists the items of that directory on a target",
            label: "Show directory ...",
            removeFolder: {
                askBeforeRemove: "Do you really want to delete the folder{0:trim,surround,leading_space}?",
                description: "Deletes the directory and all its content on a target",
                label: "Delete complete folder ...",
                removing: "Removing folder{0:trim,surround,leading_space} ...",
                yesWithLocalFolder: "YES with local folder",
            },
        },
        directoryIsEmpty: "(directory is empty)",
        errors: {
            failed: "Could not list directory{0:trim,surround,leading_space} ({1:trim,surround,leading_space}): {2:trim,surround,leading_space}",
            operationFailed: "List directory operation failed (veja o console de depuração 'CTRL/CMD + SHIFT + Y')!",
        },
        lastModified: "Last modified:{0:trim,leading_space}",
        loading: "Loading directory{0:trim,surround,leading_space} ...",
        noName: "<NO NAME>",
        parentDirectory: "(parent)",
        pull: {
            enterLocalFolder: "Enter the local folder, where the remote files should be saved ...",
            errors: {
                maxPathDepthReached: "Maximum path depth of{0:trim,leading_space} reached!",
            },
            folder: {
                description: "Pull the files of that folder to a local directory",
                label: "Pull files ...",
                title: "Pull files ...",
            },
            folderWithSubfolders: {
                description: "Pull the files (and sub folders) of that folder to a local directory",
                label: "Pull files with sub folders ...",
                title: "Pull files with sub folders ...",
            },
            pullingFile: "Pulling file{0:trim,surround,leading_space} ...",
            pullingFrom: "Pulling files from{0:trim,surround,leading_space} to{1:trim,surround,leading_space} ...",
        },
        removeFolder: {
            askBeforeRemove: "Do you really want to delete the folder{0:trim,surround,leading_space}?",
            description: "Deletes the folder and all its sub elements",
            label: "Delete complete folder ...",
            removing: "Removing folder{0:trim,surround,leading_space} ...",
        },
        selectSource: "Select the source from where to start listening ...",
        size: "Tamanho:{0:trim,leading_space}",
    },
    log: {
        noFileFound: "Nenhum arquivo de 'log' encontrado!",
        selectLogFile: "Selecione o arquivo de log que deve ser aberto ...",
    },
    maxDepthReached: "Cannot go deeper than{0:trim,leading_space}!",
    network: {
        hostname: 'Your hostname:{0:trim,surround,leading_space}',
        interfaces: {
            list: 'Suas interfaces de rede:',
        }
    },
    no: "Não",
    noFiles: "Nenhum arquivo encontrado!",
    notFound: {
        dir: "Directory{0:trim,surround,leading_space} not found!",
    },
    notifications: {
        defaultName: "Notificação #{0:trim}",
        loading: "Corregando notificações ...",
        noneFound: "Nenhuma notificação encontrada!",
        selectNotifications: "Selecione uma ou mais notificações ...",
    },
    ok: 'OK',
    output: {
        open: "Open output",
    },
    packages: {
        buttons: {
            defaultText: "Deploy package{0:trim,surround,leading_space}",
            defaultTooltip: "Click here to start deployment...",
            prompts: {
                askBeforeDelete: "Start delete operation in{0:trim,surround,leading_space}?",
                askBeforeDeploy: "Start deployment to{0:trim,surround,leading_space}?",
                askBeforePull: "Start pull operation from{0:trim,surround,leading_space}?",
            },
            unknownOperationType: "Unknown deploy operation{0:trim,surround,leading_space}!",
        },
        defaultName: "(Package #{0:trim})",
        deploymentFailed: "Could not deploy package{0:trim,surround,leading_space}:{1:trim,surround,leading_space}",
        noneFound: "No packages found!",
        selectPackage: "Select a package ...",
        virtualTarget: "Virtual target for package{0:trim,surround,leading_space}",
    },
    pagination: {
        previousPage: "Previous page ({0:trim}) ...",
        nextPage: "Next page ({0:trim}) ...",
    },
    plugins: {
        __loaded: "Loaded{0:trim,leading_space} plugins:",

        app: {
            invalidDirectory: "{0:trim,surround,ending_space}is an invalid directory!",
        },
        compiler: {
            invalidDirectory: "{0:trim,surround,ending_space}is an invalid directory!",
        },
        errors: {
            initializationFailed: "Initialization of plugin{0:trim,surround,leading_space} failed (veja o console de depuração 'CTRL/CMD + SHIFT + Y')!",
            loadingFailed: "Error while loading{0:trim,surround,leading_space} (veja o console de depuração 'CTRL/CMD + SHIFT + Y')!",
            noFactoryFunction: "Plugin module{0:trim,surround,leading_space} contains no factory function!",
            noModule: "Plugin{0:trim,surround,leading_space} contains no module!",
            noneFoundIn: "No plugins found in{0:trim,surround,leading_space}!",
            notInitialized: "Plugin{0:trim,surround,leading_space} has not been initialized!",
        },
        list: {
            defaultEntryName: "(Entry #{0:trim})",
            selectEntry: "Select the entry with settings to use for deployment...",
        },
        local: {
            invalidDirectory: "{0:trim,surround,ending_space}is an invalid directory!",
        },
        mail: {
            subject: "Deployed files",
            text: "Your deployed files (s. attachment).\n\n" + 
                  "Send by 'Deploy Reloaded' (vscode-deploy-reloaded) Visual Studio Code extension:\n" + 
                  "https://github.com/mkloubert/vscode-deploy-reloaded",
        },
        prompt: {
            validation: {
                noBool: "Please enter a valid boolean value!",
                noFloat: "Please enter a valid number (english format)!",
                noInt: "Please enter a valid integer value!",
                noJSON: "Please enter a valid, JavaScript compatible, JSON string!",
            },
        },
        script: {
            noScriptFunction: "Script{0:trim,surround,leading_space} does not contain an 'execute' function!",
            noScriptModule: "Script{0:trim,surround,leading_space} does not contain a module!",
            scriptNotFound: "Script{0:trim,surround,leading_space} not found!",
        },
        switch: {
            button: {
                text: "Switch{0:trim,surround,leading_space}",
                tooltip: "Current option:{0:trim,surround,leading_space}\n\nClick here to change the current option...",
            },
            changeSwitch: {
                description: "Changes the current option of a switch",
                label: "Change switch ...",
            },
            defaultOptionName: "Switch option #{0:trim}",
            noDefined: 'No swicthes available!',
            noOptionsDefined: 'No options were defined for the switch{0:trim,surround,leading_space}!',
            noOptionSelected2: "No option has been selected or defined for switch{0:trim,surround,leading_space}!",
            noOptionSelected: "NO OPTION SELECTED",
            selectOption: "Select an option for the switch{0:trim,surround,leading_space}...",
            selectSwitch: "Select a switch...",
        },
        test: {
            invalidDirectory: "{0:trim,surround,ending_space}is an invalid directory!",
        },
        zip: {
            errors: {
                fileAlreadyExists: "File{0:trim,surround,leading_space} already exists!",
                fileNotFound: "File{0:trim,surround,leading_space} not found!",
                noFilesFound: "No ZIP files found!",
            },
            invalidDirectory: "{0:trim,surround,ending_space}is an invalid directory!",
        },
    },
    proxies: {
        buttons: {
            defaultText: "Proxy{0:trim,surround,leading_space}",
            defaultTooltip: "Click here to change the state of that proxy ...",
        },
        errors: {
            couldNotRegister: "Could not register TCP proxy for port{0:trim,leading_space}:{1:trim,surround,leading_space}",
            couldNotToggleRunningState: "Could not toggle state of TCP proxy{0:trim,surround,leading_space} nicht ändern:{1:trim,surround,leading_space}",
            failed: "TCP proxy operation failed:{0:trim,surround,leading_space}",
        },
        noneFound: "No TCP proxy has been defined in the settings.",
        selectProxy: "Select a TCP proxy ...",
        startProxy: "Start TCP proxy ...",
        stopProxy: "Stop TCP proxy ...",
    },
    pull: {
        allOpenFiles: {
            description: "Pulls the files of all opened text editors",
            label: "All open files ...",
        },
        askForCancelOperation: "You are about to cancel the pull operation from{0:trim,surround,leading_space}. Are you sure?",
        canceledByOperation: "Pulling files from{0:trim,surround,leading_space} has been cancelled by target operation.",
        checkBeforePull: {
            beginOperation: "Check for older files in{0:trim,surround,leading_space} ...",
            notSupported: "'checkBeforePull' is not supported for source{0:trim,surround,leading_space}! Continue?",
            olderFilesFound: "{0:trim,ending_space}files was/were found, which is/are older. Continue?",
            report: {
                lastChange: "Last change",
                localFile: "Arquivo local",
                remoteFile: "Arquivo remoto",
                size: "Tamanho",
                title: "Older files in{0:trim,surround,leading_space}",
            },
        }, 
        currentFile: {
            description: "Pull the current file",
            label: "Current file ...",
        },
        currentFileOrFolder: {
            file: {
                description: "Pulls the current selected file",
                label: "Pull selected file",
            },
            folder: {
                description: "Pulls all files of the selected folder",
                label: "Pull selected folder",
            },
            items: {
                description: "Pulls all files of the selected items",
                label: "Pull selected items",
            }
        },
        errors: {
            invalidWorkspace: "Cannot pull file{0:trim,surround,leading_space} to workspace{1:trim,surround,leading_space}!",
            invalidWorkspaceForPackage: "Cannot pull package{0:trim,surround,leading_space} to workspace{1:trim,surround,leading_space}!",
            operationFailed: "Pull operation failed (veja o console de depuração 'CTRL/CMD + SHIFT + Y')!",
            operationForSourceFailed: "Pulling file(s) from source{0:trim,surround,leading_space} failed:{1:trim,surround,leading_space}",
        },
        finishedButton: {
            text: "Pull operation finished ({0:trim,ending_space}ms)",
            tooltip: "Click here to open output ...",
        },
        finishedOperation: "Pulling files from{0:trim,surround,leading_space} has been finished.",
        finishedOperationWithErrors: "[ERROR] Could not pull files from{0:trim,surround,leading_space}:{1:trim,surround,leading_space}",
        fileList: {
            description: "Pulls files, which are defined as list in the active text editor",
            label: "File list",
        },
        pullingFile: "Pulling file{0:trim,surround,leading_space} from {1:trim,surround,leading_space} ...",
        pullingFiles: "Pulling files ...",
        package: {
            description: "Pulls the files of a package",
            label: "Package ...",
        },
        popups: {
            allFailed: "None of the{0:trim,leading_space} files could be pulled!",
            fileFailed: "The file{0:trim,surround,leading_space} could not be pulled!",
            fileSucceeded: "The file{0:trim,surround,leading_space} has been pulled.",            
            someFailed: "{0:trim,ending_space}of {1:trim,ending_space}files could not be pulled!",
            succeeded: "Total of {0:trim,ending_space}files have been pulled.",
        },
        selectSource: "Select the source from where to pull from ...",
        startOperation: "Start pulling files from{0:trim,surround,leading_space} ...",
    },
    requirements: {
        conditions: {
            defaultName: "Condition #{0:trim}",
            mustMatch: "The condition{0:trim,surround,leading_space} failed, but must not!",
            shouldMatch: "The condition{0:trim,surround,leading_space} failed, but is recommended!",
        },
        extensions: {
            mustBeInstalled: "The extension{0:trim,surround,leading_space} is required, but not installed!",
            openInMarketplace: "Cancel and open Visual Studio Marketplace ...",
            shouldBeInstalled: "It is recommended to install the extension{0:trim,surround,leading_space}!",
        },
    },
    s3bucket: {
        credentialTypeNotSupported: "Credental type{0:trim,surround,leading_space} is not supported!",
    },
    scm: {
        branches: {
            noneFound: "No branches found!",
            selectBranch: "Select branch ...",
        },
        changes: {
            added: "Added",
            deleted: "Deleted",
            modified: "Modified",
            noneFound: "No changes have been found.",
        },
        commits: {
            errors: {
                selectingCommitFailed: "Could not select commit:{0:trim,surround,leading_space}",
                selectingCommitRangeFailed: "Could not select commits:{0:trim,surround,leading_space}",
            },
            noneFound: "No commits found!",
            selectCommit: "Select commit ...",
            selectFirstCommit: "Select first commit ...",
            selectLastCommit: "Select last commit ...",
        },
        loadingCommitChanges: "Loading changes of{0:trim,surround,leading_space} ({1:trim} / {2:trim}) ...",
        loadingCommits: "Loading commits from{0:trim,surround,leading_space} ({1:trim}) ...",
    },
    sftp: {
        privateKeyNotFound: "Private key file{0:trim,surround,leading_space} not found!",
    },
    shell: {
        executing: "Executing{0:trim,surround,leading_space} ...",
    },
    sql: {
        notSupported: "SQL type{0:trim,surround,leading_space} is not supported!",
    },
    switches: {
        errors: {
            operationFailed: "Switch operation failed (veja o console de depuração 'CTRL/CMD + SHIFT + Y')!",
        },
    },
    sync: {
        whenOpen: {
            errors: {
                allFailed: "All sync operations failed!",
            },
            text: "Sync when open",
        },
    },
    targets: {
        atLeastOneNotFound: "At least one target was not found!",
        cannotDefineOtherAsSource: "Cannot use target{0:trim,surround,leading_space}!",
        defaultName: "(Target #{0:trim})",
        doesNotExist: "Target{0:trim,surround,leading_space} does not exist!",
        errors: {
            couldNotLoadDataTransformer: "Could not load data transformer for{0:trim,surround,leading_space}!",
        },
        noneFound: "No targets found!",
        noPluginsFound: "No matching plugins found!",
        noWorkspaceFound: "No matching workspace found!",
        operations: {
            devTools: {
                errors: {
                    couldNotConnectTo: "Connection to{0:trim,surround,leading_space} failed!",
                },
                pages: {
                    defaultTitle: "Page #{0:trim}",
                    selectPage: "Select a page ...",
                },
            },
            http: {
                bodyScriptNotFound: "Script{0:trim,surround,leading_space} not found!",
                noBodyScriptFunction: "Script{0:trim,surround,leading_space} does not contain a 'getBody' function!",
                noBodyScriptModule: "Script{0:trim,surround,leading_space} does not contain a module!",
            },
            runningAfterDeleted: "Running 'after deleted' operation{0:trim,surround,leading_space}... ",
            runningAfterDeployed: "Running 'after deployed' operation{0:trim,surround,leading_space}... ",
            runningAfterPulled: "Running 'after pulled' operation{0:trim,surround,leading_space}... ",
            runningBeforeDelete: "Running 'before delete' operation{0:trim,surround,leading_space}... ",
            runningBeforeDeploy: "Running 'before deploy' operation{0:trim,surround,leading_space}... ",
            runningBeforePull: "Running 'before pull' operation{0:trim,surround,leading_space}... ",
            runningPrepare: "Running 'prepare' operation{0:trim,surround,leading_space}... ",
            script: {
                noScriptFunction: "Script{0:trim,surround,leading_space} does not contain an 'execute' function!",
                noScriptModule: "Script{0:trim,surround,leading_space} does not contain a module!",
                scriptNotFound: "Script{0:trim,surround,leading_space} not found!",
            },
            typeNotSupported: "Operation type{0:trim,surround,leading_space} is not supported!",
        },
        selectTarget: "Select a target ...",
        waitingForOther: "Wating for{0:trim,surround,leading_space} ...",
    },
    time: {        
        date: "YYYY-MM-DD",
        dateTime: "YYYY-MM-DD HH:mm",
        dateTimeWithSeconds: "YYYY-MM-DD HH:mm:ss",
        timeWithSeconds: "HH:mm:ss",
    },
    tools: {
        bower: {
            description: "Tools for simple use of 'bower'",
            executing: "Running{0:trim,surround,leading_space} ...",
            label: "Bower Package Manager (bower)",
            packageExample: "'moment' e.g.",
            runInstall: {
                description: "Runs 'bower install' inside the current workspace",
                enterPackageName: "Enter the name of the Bower package ...",
                label: "Run 'bower install' ...",                
            },
            runUninstall: {
                bowerFileContainsNoPackages: "{0:trim,surround,ending_space}contains no packages!",
                bowerFileNotFound: "No 'bower.json' file found in{0:trim,surround,leading_space}!",
                description: "Runs 'bower uninstall' inside the current workspace",
                errors: {
                    loadingBowerFileFailed: "Loading{0:trim,surround,leading_space} failed:{1:trim,surround,leading_space}",
                },
                label: "Run 'bower uninstall' ...",                
            },
        },
        composer: {
            description: "Tools for simple use of 'composer'",
            executing: "Running{0:trim,surround,leading_space} ...",
            label: "Composer Package Manager (composer)",
            packageExample: "'psr/log' e.g.",
            runRemove: {
                composerFileContainsNoPackages: "{0:trim,surround,ending_space}contains no packages!",
                composerFileNotFound: "No 'composer.json' file found in{0:trim,surround,leading_space}!",
                errors: {
                    loadingComposerFileFailed: "Loading{0:trim,surround,leading_space} failed:{1:trim,surround,leading_space}",
                },
                description: "Runs 'composer remove' inside the current workspace",
                label: "Run 'composer remove' ...",
            },
            runRequire: {
                description: "Runs 'composer require' inside the current workspace",
                enterPackageName: "Enter the name of the Composer package ...",
                label: "Run 'composer require' ...",
            },
        },
        createDeployScript: {
            askForNewTargetName: "Please define the name of the new target ...",
            askForScriptPath: "What should be the path of the new file?",
            askForUpdatingSettings: "Save script as new target in settings?",
            description: "Creates a basic script for deploying files",
            errors: {
                targetAlreadyDefined: "A target called{0:trim,surround,leading_space} has already been defined in the settings!",
                updateTargetSettingsFailed: "Could not write new script target entry to settings:{0:trim,surround,leading_space}",
            },
            label: "Create deploy script ...",
            scriptCreated: "The script{0:trim,surround,leading_space} has been created successfully.",
        },
        createDeployOperationScript: {
            askForNewOperationName: "Enter an optional display name for the new operation ...",
            askForOperationType: {
                afterDeployment: "After deployment",
                beforeDeploy: "Before deployment starts",
                placeHolder: "When should the script be executed?",
            },
            askForScriptPath: "What should be the path of the new file?",
            askForUpdatingSettings: "Save script in settings?",
            description: "Creates a basic script for a deploy operation",
            errors: {
                updateSettingsFailed: "Could not write new script to settings:{0:trim,surround,leading_space}",
            },
            label: "Create deploy operation script ...",
            scriptCreated: "The script{0:trim,surround,leading_space} has been created successfully.",
            selectTarget: "Select a target ...",
        },
        errors: {
            operationFailed: "Tool operation failed (veja o console de depuração 'CTRL/CMD + SHIFT + Y')!",
        },
        git: {
            listFileChanges: {
                description: "Detects changes inside the git repository between 2 commits",
                label: "Detect git changes",
            },
        },
        npm: {
            description: "Tools for simple use of 'npm'",
            executing: "Running{0:trim,surround,leading_space} ...",
            label: "Node Package Manager (npm)",
            moduleExample: "'node-enumerable' e.g.",
            runInstall: {
                description: "Runs 'npm install' inside the current workspace",
                enterModuleName: "Enter the name of the NPM module ...",
                label: "Run 'npm install' ...",
            },
            runLink: {
                description: "Runs 'npm link' inside the current workspace",
                enterModuleName: "Enter the name of the NPM module ...",
                label: "Run 'npm link' ...",
            },
            runUninstall: {
                description: "Runs 'npm uninstall' inside the current workspace",
                errors: {
                    loadingPackageFileFailed: "Loading{0:trim,surround,leading_space} failed:{1:trim,surround,leading_space}",
                },
                packageFileContainsNoModules: "{0:trim,surround,ending_space}contains no modules!",
                packageFileNotFound: "No 'package.json' file found in{0:trim,surround,leading_space}!",
                label: "Run 'npm uninstall' ...",
            },
        },
        quickExecution: {
            description: "Executes JavaScript code",
            errors: {
                failed: "Execution of code failed:{0:trim,surround,leading_space}",
            },
            help: {
                title: "'Quick execution' help",
            },
            inputCode: "Input the code, you would like to execute ($help e.g.) ...",
            label: "Quick code execution ...",
            result: {
                title: "'Quick execution' result",
            },
            uuid: {
                notSupported: "UUID version{0:trim,surround,leading_space} is not supported!",
            },
        },
        sendOrReceiveFile: {
            description: "Sends or receives a file to/from a remote editor",
            label: "Send / receive file",
            receive: {
                button: {
                    text: "Waiting for file (port{0:trim,leading_space}) ...",
                    tooltip: "Click here to cancel ...",
                },
                description: "Receives a file from a remote editor",
                enterPort: "Enter the TCP port (default:{0:trim,leading_space}) ...",
                errors: {
                    couldNotReceiveFile: "Could not receive file:{0:trim,surround,leading_space}",
                    startHostFailed: "Could not start host for receiving a file:{0:trim,surround,leading_space}",
                },
                label: "Receive file ...",
            },
            send: {
                description: "Sends a file to a remote editor",
                enterRemoteAddress: "Enter the destination address ...",
                errors: {
                    couldNotSendFile: "Sending file failed:{0:trim,surround,leading_space}",
                },
                label: "Send file ...",
            },
        },
        showPackageFiles: {
            description: "Displays the files of a package",
            label: "Show package files ...",
            title: "Files of package{0:trim,surround,leading_space}",
        },
        yarn: {
            description: "Tools for simple use of 'Yarn'",
            executing: "Running{0:trim,surround,leading_space} ...",
            label: "Yarn",
            moduleExample: "'lodash' e.g.",
            runAdd: {
                description: "Runs 'yarn add' inside the current workspace",
                enterModuleName: "Enter the name of the Yarn module ...",
                label: "Run 'yarn add' ...",
            },
            runRemove: {
                description: "Runs 'yarn remove' inside the current workspace",
                errors: {
                    loadingPackageFileFailed: "Loading{0:trim,surround,leading_space} failed:{1:trim,surround,leading_space}",
                },
                label: "Run 'yarn remove' ...",
                packageFileContainsNoModules: "{0:trim,surround,ending_space}contains no modules!",
                packageFileNotFound: "No 'package.json' file found in{0:trim,surround,leading_space}!",
            },
        },
    },
    values: {
        errors: {
            targetFormatNotSupported: "Target format{0:trim,surround,leading_space} is not supported!",
        },
        typeNotSupported: "Value type{0:trim,surround,leading_space} is not supported!",
    },
    'vs-deploy': {
        continueAndInitialize: 'Continue and initialize me...',
        currentlyActive: "'vs-deploy' extension is currently active. It is recommended to DEACTIVATE IT, before you continue and use the new extension!",
    },
    warning: "WARNING",
    waiting: "Waiting ...",
    workspace: "Workspace",
    workspaces: {
        active: {
            errors: {
                selectWorkspaceFailed: "Selecting active workspace failed (veja o console de depuração 'CTRL/CMD + SHIFT + Y')!",
            },
            noneFound: "No active workspaces found!",
            selectWorkspace: "Select the active workspace ...",
        },
        bower: {
            install: {
                errors: {
                    failed: "'bower install' failed:{0:trim,surround,leading_space}",
                },
                running: "Running 'bower install' in{0:trim,surround,leading_space} ...",
            }
        },
        composer: {
            install: {
                errors: {
                    failed: "'composer install' failed:{0:trim,surround,leading_space}",
                },
                running: "Running 'composer install' in{0:trim,surround,leading_space} ...",
            }
        },
        errors: {
            cannotDetectGitClient: "Could not find git client for{0:trim,surround,leading_space}!",
            cannotDetectGitFolder: "Could not find '.git' folder for{0:trim,surround,leading_space}!",
            cannotDetectMappedPathInfoForFile: "Cannot detect mapped path information for file{0:trim,surround,leading_space}!",
            cannotDetectPathInfoForFile: "Impossível detectar informação de caminho para o arquivo{0:trim,surround,leading_space}!",
            cannotFindBranch: "Branch{0:trim,surround,leading_space} não encontrado em {1:trim,surround,leading_space}!",
            cannotFindScmHash: "Hash{0:trim,surround,leading_space} não encontrado em{1:trim,surround,leading_space}!",
            cannotUseTargetForFile: "Não foi possível usar o destino {0:trim,surround,leading_space} para o arquivo{1:trim,surround,leading_space}!",
            initNodeModulesFailed: "A execução de 'npm install' falhou:{0:trim,surround,leading_space}",
            notInitialized: "Workspace{0:trim,surround,leading_space} não inicializado!",
        },
        initializing: "Inicizliando workspace{0:trim,surround,leading_space} ...",
        noneFound: "Nenhum workspace encontrado!",
        noSelected: "Nenhum workspace selecionado",
        npm: {
            install: {
                errors: {
                    failed: "'npm install' falhou:{0:trim,surround,leading_space}",
                },
                running: "Executando 'npm install' em{0:trim,surround,leading_space} ..."
            }
        },
        removing: "Fechando workspace{0:trim,surround,leading_space} ...",
        selectButton: {
            tooltip: "Clique aqui para selecionar outro workspace como ativo ...",
        },
        selectSource: "Selecione a origem para  workspace{0:trim,surround,leading_space} ...",
        selectTarget: "Selecione o destino para workspace{0:trim,surround,leading_space} ...",
        selectWorkspace: "Selecione um workspace ...",
        yarn: {
            install: {
                errors: {
                    failed: "'yarn install' falhou:{0:trim,surround,leading_space}",
                },
                running: "Executando 'yarn install' em{0:trim,surround,leading_space} ..."
            }
        },
    },
    yes: 'Sim',
};
