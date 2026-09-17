(() => {
  "use strict";

  const events = [...window.EVENTS];

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
  const compareByName = (left, right) =>
    left.name.localeCompare(right.name, "it");
  const compareByMonthDescending = (left, right) =>
    Math.max(0, ...right.months) - Math.max(0, ...left.months) ||
    compareByName(left, right);
  const formatMonths = (months) =>
    months.length
      ? months.map((month) => monthLabels[month - 1]).join(" / ")
      : "VAR";

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

  const createMetaItem = (label, value, displayValue, modifier) => {
    const item = createElement("div", `meta-item meta-item--${modifier}`);
    const detail = createElement("dd", "", displayValue);
    detail.title = value;
    detail.setAttribute("aria-label", value);
    item.append(
      createElement("dt", "sr-only", label),
      detail
    );
    return item;
  };

  const createCard = (event) => {
    const link = createElement("a", "", `${event.name} ↗`);
    link.href = event.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute(
      "aria-label",
      `${event.name}, apre il sito ufficiale in una nuova scheda`
    );

    const title = createElement("h2");
    title.append(link);

    const tags = createElement("ul", "tags");
    tags.setAttribute("aria-label", "Temi");
    event.tags.forEach((tag) => tags.append(createElement("li", "", tag)));

    const heading = createElement("div", "event-heading");
    heading.append(title);

    const meta = createElement("dl", "event-meta");
    meta.append(
      createMetaItem("Periodo", event.period, formatMonths(event.months), "month"),
      createMetaItem("Regione", event.region, event.region, "region"),
      createMetaItem("Luogo", event.location, event.location, "location")
    );

    const card = createElement("article", "event-card");
    card.append(
      heading,
      meta,
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
    const filteredEvents = events
      .filter((event) => matchesFilters(event, query, month, region))
      .sort(month ? compareByName : compareByMonthDescending);

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
