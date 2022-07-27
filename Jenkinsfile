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
                script {
                    dockerImage = docker.build "aslambaba/myshoes:v69"
                }
            }
        }
    }
}