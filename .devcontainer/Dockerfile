FROM ghcr.io/containerbase/node:18.16.1

USER root

RUN install-apt make g++

# renovate: datasource=github-releases packageName=containerbase/python-prebuild
RUN install-tool python 3.11.4

# renovate: datasource=npm
RUN install-tool yarn 1.22.19

RUN git config --global url.”https://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:@github.com/".insteadOf “https://github.com/"
