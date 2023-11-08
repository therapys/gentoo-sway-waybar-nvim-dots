
# Default programs
export EDITOR=vim
export TERMINAL=kitty
export BROWSER=firefox

# Editor
export KEYTIMEOUT=1

# XDG Config
export XDG_CURRENT_DESKTOP=sway
export XDG_CONFIG_HOME="$HOME/.config"
export XDG_DATA_HOME="$HOME/.local/share"
export XDG_CACHE_HOME="$HOME/.cache"
export XDG_STATE_HOME="$HOME/.local/state"

### XDG Config - Applications
export ZDOTDIR="$XDG_CONFIG_HOME/zsh"
export MYVIMRC="$XDG_CONFIG_HOME/vim/vimrc"
#export WGETRC="$XDG_CONFIG_HOME/wgetrc"
export INPUTRC="$XDG_CONFIG_HOME/inputrc"
export GNUPGHOME="$XDG_DATA_HOME/gnupg"
export PASSWORD_STORE_DIR="$XDG_DATA_HOME/password-store"
export W3M_DIR="$XDG_STATE_HOME/w3m"
export MINETEST_USER_PATH="$XDG_CONFIG_HOME/minetest"

# Wayland
export MOZ_ENABLE_WAYLAND="1"
