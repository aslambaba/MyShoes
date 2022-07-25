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
                sh 'sudo docker build -t aslambaba/myshoes:v33 .'
            }
        }
    }
}