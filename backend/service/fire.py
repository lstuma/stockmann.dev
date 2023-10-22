
# get current firestats
with open('./service/service_data/fire.fly', 'r') as f:
    fires = [int(count) for count in f.readlines()[:-1]]


def firestat(id):
    if id >= len(fires):
        return 0
    return fires[id]


def votefire(id):
    if id >= len(fires):
        return
    fires[id] += 1
    save()
        
        
def save():
    with open('./service/service_data/fire.fly', 'w') as f:
        f.write('\n'.join([str(count) for count in fires]))
    return
