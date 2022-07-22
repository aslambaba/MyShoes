pipeline{
    agent any
    tools {
        nodejs "newnodejs"
    }
    stages {
        stage('Install Dep'){
            steps {
                sh 'npm install'
            }
        }
    }
    stages {
        stage("Build"){
            steps {
                sh 'npm build'
            }
        }
    }
}