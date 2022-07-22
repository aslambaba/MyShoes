pipeline{
    agent any
    tools {
        nodejs "newnodejs"
    }
    stages {
        stage('Install and Build App'){
            steps {
                sh 'npm install'
            }
        }
        stage("Build"){
            steps {
                sh 'npm build'
            }
        }
    }
}