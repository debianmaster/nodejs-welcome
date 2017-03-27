node {
stage 'build'
openshiftBuild(buildConfig: 'nodejs-welcome', showBuildLogs: 'true')
stage 'deploy'
openshiftDeploy(deploymentConfig: 'nodejs-welcome')
}
