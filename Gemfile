source "https://rubygems.org"

# Matches the gem set GitHub Pages builds with, so local previews and the
# deployed site stay in sync.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-redirect-from"
  gem "jekyll-sitemap"
end

# Windows and JRuby need a timezone database.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "webrick", "~> 1.8"
