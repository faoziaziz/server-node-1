# server-node-1
mantap
```sh
mongodb+srv://faoziaziz:<password>@cluster0.rka7w.mongodb.net/<dbname>?retryWrites=true&w=majority
```
curl example

```bash

curl -d "param1=value1&param2=value2" -X POST http://localhost:3000/data

curl -d "param1=value1&param2=value2" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/data

curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3000/data

curl -d "@data.txt" -X POST http://localhost:3000/data

curl -d "@data.json" -X POST http://localhost:3000/data

```
data.json
```json

{
  "key1":"value1",
  "key2":"value2"
}
```

data.txt

```txt
param1=value1&param2=value2
```

```sh
 curl -d '@data.json' -H "Content-Type: application/json" -X POST http://localhost:3000/api/v1/testjson
```
