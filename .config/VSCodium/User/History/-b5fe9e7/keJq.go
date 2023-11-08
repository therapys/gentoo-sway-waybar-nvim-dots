package main

import "fmt"
import "flag"

func main() {
    port := flag.String("port", "3000", "set the port, default 3000")
    flag.Parse()

}
