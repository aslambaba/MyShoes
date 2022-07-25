pipeline{
    agent any
    stages {
        stage('Install Dep'){
            steps {
                nodejs('nodejs'){
                    sh 'npm start'
                }
            }
        }
        stage('Create Build'){
            steps {
                nodejs('nodejs'){
                    sh 'npm run build'
                }
            }
        }
    }
}