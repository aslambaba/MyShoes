pipeline{
    agent none
    tools {
        nodejs "newnodejs"
    }
    stages{
        stage('Install and Build App'){
            steps {
                sh 'npm install'
            }
            steps {
                sh 'npm build'
            }
        }
    }
}