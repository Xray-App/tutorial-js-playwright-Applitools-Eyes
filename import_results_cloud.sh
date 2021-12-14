
sed -i '' -e 's/<system-out>/<properties><property name="testrun_comment"><![CDATA[/g' results.xml
sed -i '' -e 's/<\/system-out>/]]><\/property><\/properties>/g' results.xml
# submit from the command line
BASE_URL=https://xray.cloud.xpand-it.com
token=$(curl -H "Content-Type: application/json" -X POST --data @"cloud_auth.json" "$BASE_URL/api/v1/authenticate"| tr -d '"')
curl -H "Content-Type: capplication/xml" -X POST -H "Authorization: Bearer $token"  --data @"results.xml" "$BASE_URL/api/v2/import/execution/junit?projectKey=XT&testPlanKey=XT-295"

