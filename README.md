# コンテナの立ち上げ

```
$ docker-compose up -d
```


# Reactサーバー用コンテナのターミナルの起動

```
$ docker exec -it campers_next-app sh
```

# Reactコンテナの初回セットアップ

```
$ npm install
```

# Reactコンテナの開発用サーバーの起動

```
$ cd next-app
$ npm run dev
```

# コンテナを閉じる

```
$ docker-compose down
```
