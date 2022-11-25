function searchByKeyword() {
    var results = YouTube.Search.list('id,snippet', { q: 'adele', maxResults: 25 });

    for (var i in results.items) {
        var item = results.items[i];
        Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
    }
}