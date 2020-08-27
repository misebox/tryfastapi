# mindgc


## Environment

.env
```
$ cat >.env <<EOD
UID=1000
GID=1000
DB_URL=postgresql://root:root@db:5432/mindgc
EOD
```

direnv
```
$ direnv edit .
Path_add bin
dotenv
$ direnv allow .
```

### DB Migration command


- Show history
```
bin/db history --indicate-current
```

- Migrate db to latest version
```
bin/db upgrade head
```

- Create new revision
```
bin/db revision --autogenerate
```

### Requirements

Update [requirements.txt](api/requirements.txt) from [requirements.in](api/requirements.in)
```
bin/update-reqs
```


