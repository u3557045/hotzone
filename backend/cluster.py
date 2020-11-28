

# 1. importing
import numpy as np
from sklearn.cluster import DBSCAN
import math
from .models import Geodata
from datetime import date,datetime,timedelta


# # 2. prepare data
# import pandas as pd
# final_df = pd.read_csv("final_df2.csv")
# v4 = final_df[['X', 'Y', 'days', 'caseNo']].to_numpy()

# 3. get user input


# 4. clustering functions
def custom_metric(q, p, space_eps, time_eps):
    dist = 0
    for i in range(2):
        dist += (q[i] - p[i])**2
    spatial_dist = math.sqrt(dist)

    time_dist = math.sqrt((q[2]-p[2])**2)

    if time_dist/time_eps <= 1 and spatial_dist/space_eps <= 1 and p[3] != q[3]:
        return 1
    else:
        return 2


def cluster(vector_4d, distance, time, minimum_cluster):
    # D = int(input("Inter-location distance threshold: ") or 200)
    # T = int(input("Proximity in time threshold: ") or 3)
    # C = int(input("Minimum Cluster size: ") or 2)
    params = {"space_eps": distance, "time_eps": time}
    db = DBSCAN(eps=1, min_samples=minimum_cluster-1, metric=custom_metric, metric_params=params).fit_predict(vector_4d)

    unique_labels = set(db)
    total_clusters = len(unique_labels) if -1 not in unique_labels else len(unique_labels) -1

    print("Total clusters:", total_clusters)

    total_noise = list(db).count(-1)

    print("Total un-clustered:", total_noise)

    results = list()
    day_0 = date.fromisoformat('2020-01-01')
    for k in unique_labels:
        if k != -1:
            result = list()
            labels_k = db == k
            cluster_k = vector_4d[labels_k]
            print("Cluster", k, " size:", len(cluster_k))
            for pt in cluster_k:
                place = dict()
                x = float(pt[0])
                y = float(pt[1])
                locationName = Geodata.objects.get(Xcoord=x,Ycoord=y).location_name
                dateValue = (day_0 + timedelta(days=int(pt[2]))).strftime("%Y-%m-%d")
                place['locationName'] = locationName
                place['x'] = int(pt[0])
                place['y'] = int(pt[1])
                place['date'] = dateValue
                place['caseNo'] = int(pt[3])
                result.append(place)
                print("(x:{}, y:{}, day:{}, caseNo:{})".format(pt[0], pt[1], pt[2], pt[3]))
            results.append(result)
            print()

    return results
# cluster(v4, D, T, C)

# 5. manipulate the cluster function to print give the exact output the tasksheet requires.

