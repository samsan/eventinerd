(() => {
  "use strict";

  const events = [...window.EVENTS].sort((left, right) =>
    left.name.localeCompare(right.name, "it")
  );

  const monthLabels = [
    "GEN",
    "FEB",
    "MAR",
    "APR",
    "MAG",
    "GIU",
    "LUG",
    "AGO",
    "SET",
    "OTT",
    "NOV",
    "DIC"
  ];

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
  const formatMonths = (months) =>
    months.length
      ? months.map((month) => monthLabels[month - 1]).join("\n")
      : "VAR";
  const formatLocation = (location) =>
    location
      .replace(/\s*\([^)]*\)/g, "")
      .replace(/\s*\/\s*/g, "\n")
      .trim();

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

  const createFact = (label, value, displayValue, modifier) => {
    const fact = createElement("div", `fact fact--${modifier}`);
    const detail = createElement("dd", "", displayValue);
    detail.title = value;
    detail.setAttribute("aria-label", value);
    fact.append(
      createElement("dt", "sr-only", label),
      detail
    );
    return fact;
  };

  const createCard = (event) => {
    const header = createElement("div", "card-header");
    header.append(createElement("span", "region", event.region));

    const link = createElement("a", "", `${event.name} ↗`);
    link.href = event.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const title = createElement("h2");
    title.append(link);

    const tags = createElement("ul", "tags");
    event.tags.forEach((tag) => tags.append(createElement("li", "", tag)));

    const heading = createElement("div", "event-heading");
    heading.append(header, title);

    const facts = createElement("dl", "facts");
    facts.append(
      createFact("Periodo", event.period, formatMonths(event.months), "period"),
      createFact("Dove", event.location, formatLocation(event.location), "location")
    );

    const card = createElement("article", "event-card");
    card.append(
      facts,
      heading,
      createElement("p", "description", event.description),
      tags
    );
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

    if (filteredEvents.length === 0 && /^\d+$/.test(month)) {
      const emptyState = createElement("p", "empty", "Nessun evento con questi filtri.");
      const currentMonth = Number(month);

      const monthLink = (offset) => {
        const targetMonth = ((currentMonth - 1 + offset + 12) % 12) + 1;
        const link = createElement("a", "", `'${monthSelect.options[targetMonth].text}'`);
        link.href = "#";
        link.addEventListener("click", (event) => {
          event.preventDefault();
          monthSelect.value = targetMonth;
          render();
        });
        return link;
      };

      emptyState.append(
        document.createElement("br"),
        "Prova con ",
        monthLink(-1),
        " oppure ",
        monthLink(1)
      );
      eventList.append(emptyState);
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

  monthSelect.value = String(new Date().getMonth() + 1);

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
