(() => {
  "use strict";

  const northEastRegions = new Set([
    "Emilia-Romagna",
    "Friuli-Venezia Giulia",
    "Trentino-Alto Adige",
    "Veneto"
  ]);

  const events = [...window.EVENTS].sort((left, right) =>
    left.name.localeCompare(right.name, "it")
  );

  const searchInput = document.querySelector("#search");
  const monthSelect = document.querySelector("#month");
  const regionSelect = document.querySelector("#region");
  const resetButton = document.querySelector("#reset");
  const eventList = document.querySelector("#event-list");
  const resultCount = document.querySelector("#result-count");
  const suggestLink = document.querySelector("#suggest-link");

  const normalize = (value) =>
    value
      .toLocaleLowerCase("it")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const getRegions = (event) => event.regions ?? [event.region];

  const createElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) {
      element.className = className;
    }
    if (text !== undefined) {
      element.textContent = text;
    }
    return element;
  };

  const createFact = (label, value) => {
    const fact = createElement("div", "fact");
    fact.append(
      createElement("dt", "", label),
      createElement("dd", "", value)
    );
    return fact;
  };

  const createCard = (event) => {
    const header = createElement("div", "card-header");
    header.append(createElement("span", "region", event.region));

    if (northEastRegions.has(event.region)) {
      header.append(createElement("span", "north-east", "Nord Est"));
    }

    const link = createElement("a", "", `${event.name} ↗`);
    link.href = event.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const title = createElement("h2");
    title.append(link);

    const tags = createElement("ul", "tags");
    event.tags.forEach((tag) => tags.append(createElement("li", "", tag)));

    const content = createElement("div", "event-content");
    content.append(
      header,
      title,
      createElement("p", "description", event.description),
      tags
    );

    const facts = createElement("dl", "facts");
    facts.append(
      createFact("Periodo", event.period),
      createFact("Dove", event.location)
    );

    const card = createElement("article", "event-card");
    card.append(content, facts);
    return card;
  };

  const matchesFilters = (event, query, month, region) => {
    const searchableText = normalize([
      event.name,
      event.description,
      event.location,
      event.region,
      ...getRegions(event),
      ...event.tags
    ].join(" "));

    const matchesSearch = !query || searchableText.includes(query);
    const matchesRegion = !region || getRegions(event).includes(region);
    const matchesMonth =
      !month ||
      (month === "variable"
        ? event.months.length === 0
        : event.months.includes(Number(month)));

    return matchesSearch && matchesRegion && matchesMonth;
  };

  const render = () => {
    const query = normalize(searchInput.value.trim());
    const month = monthSelect.value;
    const region = regionSelect.value;
    const filteredEvents = events.filter((event) =>
      matchesFilters(event, query, month, region)
    );

    eventList.replaceChildren(...filteredEvents.map(createCard));

    if (filteredEvents.length === 0) {
      eventList.append(
        createElement("p", "empty", "Nessun evento con questi filtri.")
      );
    }

    const hasFilters = searchInput.value || month || region;
    resultCount.textContent = hasFilters
      ? `${filteredEvents.length} ${
          filteredEvents.length === 1 ? "risultato" : "risultati"
        }`
      : `${filteredEvents.length} eventi ricorrenti`;
    resetButton.hidden = !hasFilters;
  };

  [...new Set(events.flatMap(getRegions))]
    .sort((left, right) => left.localeCompare(right, "it"))
    .forEach((region) => {
      const option = createElement("option", "", region);
      option.value = region;
      regionSelect.append(option);
    });

  if (window.location.hostname.endsWith(".github.io")) {
    const owner = window.location.hostname.split(".")[0];
    const repository =
      window.location.pathname.split("/").filter(Boolean)[0] || `${owner}.github.io`;
    suggestLink.href =
      `https://github.com/${owner}/${repository}/issues/new` +
      "?template=suggest-event.yml";
  }

  searchInput.addEventListener("input", render);
  monthSelect.addEventListener("change", render);
  regionSelect.addEventListener("change", render);
  resetButton.addEventListener("click", () => {
    searchInput.value = "";
    monthSelect.value = "";
    regionSelect.value = "";
    render();
    searchInput.focus();
  });

  render();
})();
