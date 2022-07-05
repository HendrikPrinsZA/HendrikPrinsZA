# Actual Readme
Some notes about using this repo.

## Run your GitHub Actions locally
This is very useful for testing, install [nektos/act](https://github.com/nektos/act) by [Casey Lee](https://cplee.org/).
```sh
cd /path/to/this/repo 
act schedule
```

## To do
- Make username dynamic (pref .env, but check convention for GitHub workflows)

## Wishlist
- Host on Google Pages? This will enable using the dynamic web components, see https://hendrikprinsza.github.io/botline/
  - Test with iframe first
- `npm install -g my-readme && my-readme MyUserName`
