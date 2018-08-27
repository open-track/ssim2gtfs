ssim2gtfs
=========================

ssim2gtfs converts [IATA SSIM](https://www.iata.org/publications/store/Pages/standard-schedules-information.aspx) flight schedule data into a [GTFS](https://developers.google.com/transit/gtfs/) zip containing trips, stops, stop times and calendars.

## Status

In development, not currently functional.

## Usage

ssim2gtfs is a CLI tool that can be installed via NPM:

```
# installation
npm install -g ssim2gtfs

# cli options
ssim2gtfs -i flights.ssim -o gtfs.zip

# unix pipes
cat flights.ssim | ssim2gtfs > gtfs.zip
```

## Contributing

Issues and PRs are very welcome. To get the project set up run

```
git clone git@github.com:open-track/ssim2gtfs
npm install --dev
npm test
```

If you would like to send a pull request please write your contribution in TypeScript and if possible, add a test.

## License

This software is licensed under [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html).

