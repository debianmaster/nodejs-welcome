FROM codercom/ubuntu-dev-node12:latest
RUN cd /tmp && curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.14.0/bin/linux/amd64/kubectl \
&& chmod +x /tmp/kubectl \
&& sudo mv /tmp/kubectl /usr/local/bin/kubectl
