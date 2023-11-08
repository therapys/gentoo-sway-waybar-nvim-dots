autoload -U compinit colors

colors
PROMPT='%m%# '
RPROMPT=' %~'

compinit -d $XDG_CACHE_HOME/zsh/zcompdump-$ZSH_VERSION
zstyle :compinstall filename $XDG_CONFIG_HOME/zsh/.zshrc
zstyle ':completion:*' cache-path $XDG_CACHE_HOME/zsh/zcompcache
zstyle ':completion:*' menu select
zmodload zsh/complist
_comp_options+=(globdots)

HISTSIZE=5000
SAVEHIST=5000
HISTFILE=$XDG_STATE_HOME/zsh/history
setopt SHARE_HISTORY
setopt HIST_EXPIRE_DUPS_FIRST
setopt HIST_IGNORE_DUPS
setopt EXTENDED_HISTORY

bindkey -v
bindkey -M menuselect 'h' vi-backward-char
bindkey -M menuselect 'k' vi-up-line-or-history
bindkey -M menuselect 'l' vi-forward-char
bindkey -M menuselect 'j' vi-down-line-or-history

alias history='history 1'
alias ls='ls --color=auto -h'
alias grep='grep --color'
alias wget='wget --hsts-file="$XDG_CACHE_HOME/wget-hsts"'
alias {vim,vi}='nvim'

if [[ -f /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh ]]; then
  source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
fi
eval "$(starship init zsh)"
