pipeline{
    agent any
    stages {
        stage('Install Dep'){
            steps {
                nodejs('newnodejs'){
                    sh 'npm start'
                }
            }
        }
        stage('Create Build'){
            steps {
                nodejs('newnodejs'){
                    sh 'npm run build'
                }
            }
        }
    }
}