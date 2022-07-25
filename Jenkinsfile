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
            when{
                expression{
                    
                }
            }
            steps {
                nodejs('newnodejs'){
                    sh 'npm run build'
                }
            }
        }
    }
}