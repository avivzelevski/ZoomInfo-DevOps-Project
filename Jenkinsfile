pipeline {
    agent any
   
    stages {
         stage('Clone repository') { 
            steps { 
                script{
                checkout scm
                }
            }
        }

        stage('Build') { 
            steps { 
                 sh 'docker build -t node_app .'
            }
        }
        stage('Test'){
            steps {
                 sh 'echo Test'
            }
        }
        stage('Deploy') {
            steps {
               sh 'echo Deploy'
            }
        }
    }
}
