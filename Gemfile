source "https://rubygems.org"

gem "github-pages", "~> 228"
gem "jekyll", "~> 3.9.3"
gem "webrick", "~> 1.8"
gem "jekyll-remote-theme"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15.1"
  gem "jekyll-seo-tag", "~> 2.8.0"
  gem "jekyll-sitemap", "~> 1.4.0"
end

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
