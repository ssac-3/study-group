from typing import List
import collections

tests = {
    1: "abc"
}

res = {
    1: ["abc", "acb", "bac", "bca", "cab", "cba"]
}

def is_same_list(alist: List, blist: List):
    return collections.Counter(alist) == collections.Counter(blist)

def check_result(index: int, output: List):
    if index > len(tests):
        raise RuntimeError(f'Failed to get {index}th case')

    return is_same_list(output, res.get(index, []))

def find_permutation(s):
    if len(s) == 1:
        return list(s)

    ans = []
    curr = s[0]
    s = s[1:]
    print("s >>>> ", s)

    words = find_permutation(s)
    print("words >>>> ", words)

    for sub in words:
        print("**sub*", sub)
        for i in range(len(sub) + 1):
            print("i = ",i)
            print("sub[:i] : ", sub[:i], "/ curr: ", curr, "/ sub[i:]: ", sub[i:])
            ans.append("".join([sub[:i], curr, sub[i:]]))
            print("ans >>>>>>>>>>>>>>>>>>> ", ans)

    return ans

def main():
    for index, input_str in tests.items():
        res = find_permutation(input_str)

        if check_result(index, res):
            print(f'Test case {index} is correct: value {res}')
        else:
            print(f'Test case {index} is failed: value {res}')

if __name__ == '__main__':
    main()