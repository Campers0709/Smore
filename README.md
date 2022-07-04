# コンテナの立ち上げ

```
$ docker-compose up -d
```


# Reactサーバー用コンテナのターミナルの起動

```
$ docker exec -it team42_react-app_1 sh
```

# Reactコンテナの初回セットアップ

```
$ npm install
```

# Reactコンテナの開発用サーバーの起動

```
$ cd react-app
$ npm start
```

# コンテナを閉じる

```
$ docker-compose down
```
