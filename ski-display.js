fetch("https://raw.githubusercontent.com/egralnet/ski-crowd/main/ski-data.json")


  .then((res) => res.json())
  .then((skiData) => {
    const container = document.getElementById("ski-search-results");
    container.innerHTML = "";

    skiData.forEach((item, index) => {
      const html = `
        <div style="border:1px solid #ccc;padding:1em;margin-bottom:1em;border-radius:10px;">
          <div style="font-size:1.2em;font-weight:bold;">
            ${index + 1}. ${item.name}（総合スコア：${item.score}点）
          </div>
          <div style="margin-top:0.5em;">
            <div>積雪量：
              <div style="background:#eee;width:100%;height:10px;">
                <div style="background:#3b82f6;width:${item.snow}%;height:10px;"></div>
              </div>
            </div>
            <div>混雑度：
              <div style="background:#eee;width:100%;height:10px;">
                <div style="background:#f59e0b;width:${item.crowd}%;height:10px;"></div>
              </div>
            </div>
            <div>食事評価：
              <div style="background:#eee;width:100%;height:10px;">
                <div style="background:#10b981;width:${item.food}%;height:10px;"></div>
              </div>
            </div>
          </div>
          <a href="${item.hotel_link}" target="_blank"
             style="display:inline-block;margin-top:0.8em;padding:0.4em 1em;background:#16a34a;color:white;border-radius:5px;text-decoration:none;">
            🏨 周辺の宿を探す
          </a>
        </div>
      `;
      container.innerHTML += html;
    });
  })
  .catch(() => {
    document.getElementById("ski-search-results").innerHTML = "読み込み失敗";
  });
