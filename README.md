# A Node js Command Line Password Generator

## My process

### Built with

- Node js

## Commands

### Helper command

```bash
pass-gen -h
```

### Generate Password

```bash
pass-gen
```

### Command Options

Generate and save password to a `.txt` file

```bash
pass-gen --save
```

Generate a certain number of character password by specifying the number value with `--length` or with shorter version `-l` eg. `--length=10` or `-l=20`

```bash
pass-gen --length={number} || pass-gen -l={number}
```

Generate a certain number of character password without special character symbols in them

```bash
pass-gen -ns
```

Generate a certain number of character password without numbers in them

```bash
pass-gen -nn
```
