# <%= name %>

> <%= description %>

## Usage

Install [SAO](https://github.com/egoist/sao) first.

```bash
yarn global add sao
# or
npm i -g sao
```

### From git

```bash
sao <%= username %>/<%= name %> my-project
```

### From npm

```bash
sao <%= name.replace('template-', '') %> my-project
```

## License

MIT &copy; [<%= username %>](<%= website %>)
