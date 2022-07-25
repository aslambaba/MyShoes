pipeline{
    agent any
    stages {
        stage('Install Dep'){
            steps {
                nodejs('newnodejs'){
                    sh 'npm install'
                }
            }
        }
        stage('Build Docker Image'){
            steps {
                docker.image('nginx:latest').inside {
                sh 'docker build -t aslambaba/myshoes:v33 .'
            }
        }
    }
}