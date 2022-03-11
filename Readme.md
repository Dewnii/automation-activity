# Automation Exercise

## How to run


Open your cmd or terminal and run these commands.

1. Install Dependencies

```sh
npm install
```

2. Create a ``.env`` file in the root directory with following values related to the environment

```sh
APP_URL=https://the-internet.herokuapp.com
BROWSER=chromium
SHOW_BROWSER=true
COMMAND_TIMEOUT=2500
WINDOW_SIZE=1024X768
TEST_DATA_FILE_LOCATION=../data/test_data.json
PAGE_LOAD_WAIT_SECONDS=5
```

3. Add test data related to your environment using the same format in ``data/test_data.json``. Add location of your testdata file in ``.env`` under ``TEST_DATA_FILE_LOCATION``

``Note`` : To make it easier to run I have also commited the test_data.json file 


4. Run the below command to run all the tests

```sh
npx codeceptjs run
```

5. Run the below command to only smoke tests with tag @smoke

```sh
npx codeceptjs run --grep "@smoke"
```
