package main

import ("fmt"
        "net/http"
        "log"
        "flag"
)

func wsEndpoint(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello World")
}

func setupRoutes() {
    http.HandleFunc("/ws", wsEndpoint)
}

func main() {
    port := flag.String("port", "3000", "set the port, default 3000")
    flag.Parse()

    fmt.Println("Starting backend!")
    setupRoutes()
    log.Fatal(http.ListenAndServe(":"+&
    port, nil))
}
