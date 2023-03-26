# Chatyx-frontend
![total-lines](https://img.shields.io/tokei/lines/github/Chatyx/frontend)

## Table of contents:
- [Architecture](#Architecture)
- [Quick start](#quick_start)
- [Configuration](#Configuration)
- [Additional](#Additional)
  - [Generate code from protobuf](#generate_protobuf)

## Architecture
### Feature-Sliced Design
The main idea consists of unidirectional data stream.
Downstream components can't use upstream ones.
<img src="src/shared/assets/images/fsd.png" alt="photo example"></img>

## <a name="quick_start"></a>  Quick start
### Using single docker container
TODO

### Manually build from source code
First you should clone this repository:
```bash
$ git clone https://github.com/Chatyx/frontend.git
# or
$ git clone git@github.com:Chatyx/frontend.git
```

Next step is installing dependencies:
```bash
$ cd frontend

$ npm install
```

***Create .env configuration file from next chapter!***

And finally you can use:
```bash
# for run project on dev server:
$ npm run start

# for development build:
$ npm run dev

# for production build:
$ npm run build
```

## Configuration
For run project you also need to create  configuration file with name **.env**
It must be placed in the root directory (*near with the package.json*)

#### Basic view of file:
```dotenv
SERVER_URL=http://localhost:8000
WS_URL=ws://localhost:8080
CHAT_MESSAGES_STEP=20

APP_PORT=3000
```

## Additional
#### <a name="generate_protobuf"></a> Generate code from protobuf:

If you want to regenerate code from protobuf, you can run this
```bash
protoc --plugin="./node_modules/.bin/protoc-gen-ts_proto" --ts_proto_opt=esModuleInterop=true --ts_proto_out="./src/entities/message" src/entities/message/consts/message.proto
```
But it is not necessary... The generated code is already in the repository
