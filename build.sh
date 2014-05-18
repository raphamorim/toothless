# Mr. Builder
#pwd

function Sample {
    echo "building...."
    echo
}

function Express {
    # Needs ask if install express in global
    echo "building...."
    echo
    npm install -g express
    express /tmp/foo && cd /tmp/foo
    npm install
    npm start
}

function Mean {
    echo "building...."
    echo
    echo "[Warning] This project needs MongoDB running to start!"
    git clone git@github.com:raphamorim/Despicable.git
    cd despicable
    npm install
}

function MrBuilder {
    clear
        echo "Hi! Welcome to Mr.Builder :)"
        echo "------------------------------------------"
        echo "What you wanna build?"
        echo
        echo "1. Sample site"
        echo "2. Sample express project"
        echo "3. Project using MEAN stack"
        echo "4. Exit"
        echo

    read what
    case $what in
        1) Sample ;;
        2) Express ;;
        3) Mean ;;
        4) exit ;;
        *) echo ; echo "Invalid option" ; read waiting ; MrBuilder ;;
    esac
}

MrBuilder
