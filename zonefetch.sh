#!/bin/sh
wget -q --header "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/zone"    
zone=$(cat zone | sed -e "s#^projects/[[:digit:]]\+/zones/\(.*\)#\1#")
echo $ZONE
    
