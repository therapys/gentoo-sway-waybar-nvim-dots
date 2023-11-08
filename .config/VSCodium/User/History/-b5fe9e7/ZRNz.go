package main

import ("fmt"
        "net/http"
)

func wsEndpoint(w http.ResponseWriter, r *http.Request)

func setupRoutes() {
    http.HandleFunc("/ws", wsEndpoint)
}

func main() {
    port := flag.String("port", "3000", "set the port, default 3000")
    flag.Parse()

    tcpAddr, err := net.ResolveTCPAddr()

}
