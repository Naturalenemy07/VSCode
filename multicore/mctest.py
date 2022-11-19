import multiprocessing as mp
import time

start = time.perf_counter()
def do_something():
    print('sleeping in 1 second')
    time.sleep(1)
    print('done sleeping')

do_something()
do_something()
end = time.perf_counter()

print(f'Finished in {end-start} seconds')