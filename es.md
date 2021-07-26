
curl -XPOST localhost:9200/customer/_update_by_query -H 'Content-Type: application/json' -d'
{
  "script": {
    "source": "ctx._source.per_name = 'Jane Doe'",
    "lang": "painless"
  },
  "query": {
    "match_all": {}
  }
}
