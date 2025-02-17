source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

# previously part of ruby core, now separate
gem 'csv'
gem 'logger'
gem 'base64'
gem 'bigdecimal'

# core app dependencies
gem 'jekyll'
gem 'redcarpet'
gem 'kramdown-parser-gfm'
gem 'kramdown-syntax-coderay'
gem 'kramdown-math-mathjaxnode'
gem 'kramdown-math-sskatex'

group :jekyll_plugins do
  # gem 'jekyll-paginate-v2'
  gem 'jekyll-gist'
end

group :development, :test do
  gem 'webrick'
  gem 'bundler-audit'
end
