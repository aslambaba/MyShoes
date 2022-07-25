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
                nodejs('newnodejs'){
                    sh 'docker build -t aslambaba/myshoes:v33 .'
                }
            }
        }
    }
}