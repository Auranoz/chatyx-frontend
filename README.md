# Chatyx-frontend

## Table of contents:
- [Architecture](#Architecture)
- [Quick start](#Quick start)
- [Additional](#Additional)
  - [Generate code from protobuf](#Generate code from protobuf:)

## Architecture
TODO

## Quick start
TODO

## Additional
#### Generate code from protobuf:
```
protoc --plugin="./node_modules/.bin/protoc-gen-ts_proto" --ts_proto_opt=esModuleInterop=true --ts_proto_out="./src/entities/message" src/entities/message/consts/message.proto
```
