# Chatyx-frontend

## Table of contents:
- [Architecture](#Architecture)
- [Quick start](#quick_start)
- [Additional](#Additional)
  - [Generate code from protobuf](#generate_protobuf)

## Architecture
TODO

## <a name="quick_start"></a>  Quick start
TODO

## Additional
#### <a name="generate_protobuf"></a> Generate code from protobuf:
```
protoc --plugin="./node_modules/.bin/protoc-gen-ts_proto" --ts_proto_opt=esModuleInterop=true --ts_proto_out="./src/entities/message" src/entities/message/consts/message.proto
```
