Package.describe({
    summary: "Calculate timezones without a webservice using only latitude and longitude"
});

Package.on_use(function (api) {
    api.use();
    api.add_files("tz_world.js");
});
