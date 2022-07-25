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
        stage('Create Build'){
            steps {
                nodejs('newnodejs'){
                    sh 'npm run-script build'
                }
            }
        }
    }
}